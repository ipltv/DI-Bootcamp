import os
import sys

def print_tree(startpath, prefix=""):
    entries = sorted(os.listdir(startpath))
    entries_count = len(entries)

    for i, entry in enumerate(entries):
        path = os.path.join(startpath, entry)
        connector = "└── " if i == entries_count - 1 else "├── "
        print(prefix + connector + entry)

        if os.path.isdir(path):
            extension = "    " if i == entries_count - 1 else "│   "
            print_tree(path, prefix + extension)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python tree.py <directory>")
        sys.exit(1)

    root_dir = sys.argv[1]

    if not os.path.isdir(root_dir):
        print(f"Error: {root_dir} is not a directory")
        sys.exit(1)

    root_name = os.path.basename(os.path.abspath(root_dir))
    print(f"{root_name}/")
    print_tree(root_dir)