# Richwing Tours Angular Migration Checklist

## Completed

- Replaced the default Angular starter page with a router outlet.
- Created standalone route shell and page routes.
- Created layout components for top bar, navbar, footer, site layout, and back-to-top behavior.
- Created reusable shared component foundations.
- Created core models for migrated content.
- Created centralized starter data files.
- Added a lightweight SCSS foundation without copying legacy compiled CSS.
- Created `/public/images` subfolders for future asset organization.

## Pending

- Migrate `index.php` content into the home page using shared components.
- Migrate `about.php` content into the about page.
- Migrate `destination.php` content into typed destination data and detail components.
- Migrate `service.php` service cards into `services.data.ts`.
- Decide whether `package.php` remains public, hidden, or replaced with real packages.
- Replace legacy contact PHP flow with an Angular form plus backend endpoint.
- Replace Font Awesome class usage with an Angular-friendly icon strategy.
- Remove unused legacy jQuery/plugin dependencies after parity checks.
- Optimize and rename images in `/public/images`.
- Add tests after actual content and interaction behavior are migrated.
