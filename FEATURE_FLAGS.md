# Feature Flags Documentation

This document explains how to enable/disable hidden pages in the Vansh Realty application.

## Overview

The application uses feature flags to control the visibility of certain pages. By default, the following pages are hidden:
- Online Presence
- Offline Presence
- NRI Services

These pages have also been removed from the navigation dropdown menus.

## Configuration

Feature flags are managed in `src/config/featureFlags.js`. To enable any hidden page, simply set its corresponding flag to `true`.

### Available Flags

```javascript
export const FEATURE_FLAGS = {
  // Hidden pages - set to false to hide from users
  ONLINE_PRESENCE_PAGE: false,    // Controls Online Presence page
  OFFLINE_PRESENCE_PAGE: false,   // Controls Offline Presence page
  NRI_SERVICES_PAGE: false,       // Controls NRI Services page
};
```

### Enabling a Page

To make a page visible to users:

1. Open `src/config/featureFlags.js`
2. Change the desired flag from `false` to `true`
3. Save the file
4. The page will now be accessible

Example - Enabling the Online Presence page:
```javascript
export const FEATURE_FLAGS = {
  ONLINE_PRESENCE_PAGE: true,     // Now visible
  OFFLINE_PRESENCE_PAGE: false,   // Still hidden
  NRI_SERVICES_PAGE: false,       // Still hidden
};
```

## Technical Implementation

Each component checks its feature flag at the beginning of the component:

```javascript
// Return null if the page is disabled
if (!FEATURE_FLAGS.PAGE_NAME) {
  return null;
}
```

This ensures that even if someone navigates directly to the route, they will see nothing if the feature is disabled.

The routes are defined in `src/App.js` but will render nothing when the feature flags are set to false.

Additionally, the navigation dropdown menus in `src/components/Header.js` have been updated to remove these options, so they won't appear in the UI even if the routes exist.