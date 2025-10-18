.PHONY: lint format

lint:
	pnpm run lint

format:
	pnpm run format

run:
	pnpm run dev

doc: ./doc/vscode-actions.json
	./script/vscode-actions-to-md.sh $< ./content/vscode-actions.md
