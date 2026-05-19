# Site Swap Status

## Current State: TRADEPAD ACTIVE
- **Branch**: `main`
- **Deployed site**: TradePad landing page (www.nirav.work)
- **Portfolio backup**: `backup-portfolio-20260519`
- **Swapped on**: 2026-05-19

## How to Restore Portfolio

```bash
cd ~/Workspace/NiravPortfolio
./restore-portfolio.sh
```

Or manually:
```bash
git checkout main
git reset --hard backup-portfolio-20260519
git push origin main --force-with-lease
```

## Files
- `swap-to-tradepad.sh` — Swap script (one-time use)
- `restore-portfolio.sh` — Restore script (reusable)
- `static/` — TradePad static files
- `.github/workflows/deploy.yml` — Updated to deploy static files

## Notes
- The portfolio React source code is preserved in `backup-portfolio-20260519` branch
- GitHub Actions will deploy `static/` to GitHub Pages on every push to main
- CNAME remains `www.nirav.work`
