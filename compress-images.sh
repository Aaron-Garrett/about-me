#!/bin/zsh
# Shrinks every JPG/PNG in img/ to at most 1600px on the long edge (JPEGs re-saved at quality 72).
# Filenames stay the same, so index.html and the CSS need no changes.
# Originals are copied to ../img-backup-original first. demo.mov is left alone.
# Uses macOS's built-in `sips`. Run from the repo root:  zsh compress-images.sh

set -e
cd "$(dirname "$0")"

MAX=1600
BACKUP=../img-backup-original

if [ -e "$BACKUP" ]; then
  echo "$BACKUP already exists - move it or delete it first so we don't overwrite your backup."
  exit 1
fi

cp -pR img "$BACKUP"
echo "Backed up originals to $BACKUP"
echo "Before: $(du -sh img | cut -f1)"

for f in img/*.jpg img/*.JPG img/*.jpeg img/*.png; do
  [ -f "$f" ] || continue
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  longest=$(( w > h ? w : h ))

  case "$f" in
    *.png)
      # PNGs keep transparency; only resize if too big
      [ "$longest" -gt "$MAX" ] && sips -Z "$MAX" "$f" >/dev/null
      ;;
    *)
      if [ "$longest" -gt "$MAX" ]; then
        sips -Z "$MAX" -s format jpeg -s formatOptions 72 "$f" >/dev/null
      else
        sips -s format jpeg -s formatOptions 72 "$f" >/dev/null
      fi
      ;;
  esac
done

echo "After:  $(du -sh img | cut -f1)"
