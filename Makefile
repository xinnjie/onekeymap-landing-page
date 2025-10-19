.PHONY: lint format doc

lint:
	pnpm run lint

format:
	pnpm run format

run:
	pnpm run dev

./content/vscode-actions.md: ./doc/vscode-actions.json
	./script/vscode-actions-to-md.sh $< $@

doc: ./content/vscode-actions.md
