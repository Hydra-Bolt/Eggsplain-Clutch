<p align="center">
  <img src="docs/eggsplain-wordmark.svg" alt="eggsplain" width="320" />
</p>

<h1 align="center">eggsplain CLUTCH</h1>
<p align="center"><b>Sovereign project management. Every task hatches.</b></p>

Clutch is Eggsplain's self-hosted work tracker: a *clutch* of eggs is a batch laid together, and a clutch of work items is what you sit on until it hatches. Track issues, run cycles, plan modules and manage roadmaps, on your own hardware, next to [Nest](https://github.com/Hydra-Bolt/NestCloud-Fork) and the rest of the Eggsplain stack.

## Upstream and license

Clutch is a fork of [makeplane/plane](https://github.com/makeplane/plane) and stays under the same **AGPL-3.0** license (see [LICENSE.txt](LICENSE.txt)). Original copyright headers are retained. Eggsplain changes are limited to branding (name, logo, favicons, brand colours, UI copy) so that upstream can be merged cleanly:

```bash
git remote add upstream https://github.com/makeplane/plane.git
git fetch upstream && git merge upstream/preview
```

## Self-hosting

Setup is unchanged from upstream: `./setup.sh`, then `docker compose up -d`. See [docker-compose.yml](docker-compose.yml) and the upstream [deployment guides](https://developers.plane.so/self-hosting/overview).

## Branding

Tokens follow the Eggsplain `DESIGN.md`: ignition orange `#FF6B00` as the brand scale (`packages/tailwind-config/eggsplain-theme.css`), surface `#1B1D24`, eggshell `#FFFBF2`. The symbol is the 【 】 shell: `ClutchLogo` in `@plane/blocks`.
