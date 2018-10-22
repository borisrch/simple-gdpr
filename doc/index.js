const demo1 = new SimpleGDPR({
  float: 'demo-light',
  theme: 'light',
  animation: 'fade',
  callback: () => {
    demo1.close();
    setTimeout(() => {
      demo1.open();
    }, 800); 
  },
  id: {
    box: 'demo1-box',
    button: 'demo1-button',
  }
});

const demo2 = new SimpleGDPR({
  float: 'demo-dark',
  title: 'This website is using cookies.',
  theme: 'dark',
  animation: 'slide',
  callback: () => {
    demo2.close();
    setTimeout(() => {
      demo2.open();
    }, 800); 
  },
  id: {
    box: 'demo2-box',
    button: 'demo2-button',
  }
});


const demo3 = new SimpleGDPR({
  float: 'demo-modern',
  title: 'Accept Cookies & Privacy Policy?',
  theme: 'modern',
  animation: 'slide',
  callback: () => {
    demo3.close();
    setTimeout(() => {
      demo3.open();
    }, 800); 
  },
  id: {
    box: 'demo3-box',
    button: 'demo3-button',
  }
});


const demo4 = new SimpleGDPR({
  float: 'demo-material',
  title: 'GPDR Compliance',
  icons: false,
  theme: 'material',
  animation: 'fade',
  callback: () => {
    demo4.close();
    setTimeout(() => {
      demo4.open();
    }, 800); 
  },
  id: {
    box: 'demo4-box',
    button: 'demo4-button',
  }
});