import os

root_dir = '/home/min/Min/Projects/Others/rivar-trims/rivar-trims-website-next.js/public/images/products'

for folder in os.listdir(root_dir):
    folder_path = os.path.join(root_dir, folder)
    if not os.path.isdir(folder_path):
        continue
    
    # Get all files, filter out hidden files
    files = sorted([f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f)) and not f.startswith('.')])
    
    if not files:
        continue
    
    # Rename first file to thumbnail
    first_file = files[0]
    ext = os.path.splitext(first_file)[1]
    new_thumbnail_name = f"thumbnail{ext}"
    os.rename(os.path.join(folder_path, first_file), os.path.join(folder_path, new_thumbnail_name))
    print(f"Renamed {first_file} -> {new_thumbnail_name} in {folder}")
    
    # Rename others to 01, 02...
    for i, filename in enumerate(files[1:], start=1):
        ext = os.path.splitext(filename)[1]
        new_name = f"{i:02d}{ext}"
        os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_name))
        print(f"Renamed {filename} -> {new_name} in {folder}")
