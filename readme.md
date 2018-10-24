# SimpleGDPR

## Documentation

Documentation and demo can be found here: LINK

## Introduction

SimpleGDPR is a lightweight and easy-to-use GDPR consent plugin. It features:
- Simple API
- Built in themes
- Customizable via CSS
- Mobile ready
- No dependencies

## Installation:

### cdn:
```
<script src="https://unpkg.com/simple-gdpr@1.1.4/dist/simplegdpr.umd.js"></script>

<link href="https://unpkg.com/simple-gdpr@1.1.4/dist/simplegdpr.min.css" rel="stylesheet"/>
```
### npm:
```
npm install simple-gdpr

import SimpleGDPR from 'simple-gdpr';
```

## Basic Usage:
```
const notice = new SimpleGDPR({ 
  title: 'We use cookies!',
  callback: () => { 
    analytics.start(); 
    notice.close(); 
  },
  link: 'privacypolicy.html',
}
```

View the docs for details on all of the options you can supply to customize tooltips to suit your needs.