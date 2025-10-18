#!/bin/bash

#
# This script converts a JSON file of VSCode actions into a Markdown document.
# It's designed to create a searchable and SEO-friendly reference page.
#
# Usage:
# ./vscode-actions-to-md.sh <input_json_file> <output_markdown_file>
#
# Example:
# ./vscode-actions-to-md.sh path/to/vscode-actions.json path/to/vscode-actions.md
#

# --- Validation ---

# Check for correct number of arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_json_file> <output_markdown_file>"
    exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "jq could not be found. Please install jq to run this script."
    exit 1
fi

# Define input and output files from command-line arguments
ACTIONS_FILE="$1"
OUTPUT_FILE="$2"

# Check if input file exists
if [ ! -f "$ACTIONS_FILE" ]; then
    echo "Error: Input file '$ACTIONS_FILE' not found."
    exit 1
fi

# --- Markdown Generation ---

# Start generating the markdown file
# The YAML frontmatter is for static site generators like Hugo/Jekyll for better SEO.
{
  echo "---"
  echo "title: 'VSCode Actions Reference'"
  echo "description: 'A comprehensive list of Visual Studio Code actions and their default keybindings. Search and find any action to improve your productivity.'"
  echo "keywords: 'vscode, actions, keybindings, shortcuts, reference, productivity'"
  echo "---"
  echo ""
  echo "# Visual Studio Code Actions Reference"
  echo ""
  echo "<!--"
  echo "**Note:** This document is automatically generated. Do not edit it directly."
  echo "This document is generated from a JSON file extracted from VSCode by [Github Actions](https://github.com/xinnjie/vscode-extract-actions-metadata/blob/f0c0232eb213ac3547b1e42ebf653c4309798a2f/.github/workflows/extract-actions.yml)."
  echo "Process details are described in [EXTRACT_ACTIONS_README.md](https://github.com/xinnjie/vscode-extract-actions-metadata/blob/f0c0232eb213ac3547b1e42ebf653c4309798a2f/EXTRACT_ACTIONS_README.md#L10)."
  echo "To update this document, please modify the script [vscode-actions-to-md.sh](https://github.com/xinnjie/onekeymap-page/blob/main/script/vscode-actions-to-md.sh) or the source JSON file and regenerate it."
  echo "-->"
  echo ""
  echo "This document provides a comprehensive list of Visual Studio Code actions and their default keybindings, extracted directly from the application's configuration. Use this page to find and learn new shortcuts to speed up your development workflow."
  echo ""

  # Use jq to group actions by category and then generate markdown.
  # This creates a more structured and navigable document.
  jq -r '
    # Group all actions by their category field.
    group_by(.category) |
    # Sort the groups to ensure "Uncategorized" (where category is null) appears last.
    sort_by(if .[0].category == null then 1 else 0 end, .[0].category) | .[] |
    # For each group, output the category as a level-2 heading.
    # Use "Uncategorized" as a fallback if the category is null or missing.
    "## " + (.[0].category // "Uncategorized") + "\n\n" +
    # Then, iterate over each action within the current group.
    ([.[] |
      # Handle cases where keybinding can be an array or a single object.
      (if .keybinding | type == "array" then .keybinding[0] else .keybinding end) as $kb |
      # Format the action title as a level-3 heading.
      "### " + .title + "\n\n" +
      "**ID:** `" + .id + "`\n\n" +
      (if .precondition then "**Precondition:** `" + .precondition + "`\n\n" else "" end) +
      (if $kb.primary.win then "**Default Keybinding:**\n\n" +
        "- **Windows:** `" + $kb.primary.win + "`\n" +
        "- **Linux:** `" + $kb.primary.linux + "`\n" +
        "- **macOS:** `" + $kb.primary.mac + "`\n\n" else "" end) +
      (if $kb.secondary and $kb.secondary.win then "**Secondary Keybinding:**\n\n" +
        "- **Windows:** `" + (if $kb.secondary.win then $kb.secondary.win | join(", ") else "" end) + "`\n" +
        "- **Linux:** `" + (if $kb.secondary.linux then $kb.secondary.linux | join(", ") else "" end) + "`\n" +
        "- **macOS:** `" + (if $kb.secondary.mac then $kb.secondary.mac | join(", ") else "" end) + "`\n\n" else "" end) +
      (if $kb.when then "**When:** `" + $kb.when + "`\n\n" else "" end)
    ] | join("---\n\n"))' "$ACTIONS_FILE"
} > "$OUTPUT_FILE"

echo "Markdown file generated successfully at $OUTPUT_FILE"