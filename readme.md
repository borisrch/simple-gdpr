# SimpleGDPR

## Documentation

[Full documentation and demo can be found here.](https://borisrch.github.io/simple-gdpr/ "SimpleGDPR Documentation")

## Introduction

SimpleGDPR is a lightweight and easy-to-use GDPR consent plugin. It features:
- Simple API
- Built in themes
- Customizable via CSS
- Mobile ready
- No dependencies

## Installation:

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

[View the docs](https://borisrch.github.io/simple-gdpr/) for details on all of the options you can supply to customize tooltips to suit your needs.