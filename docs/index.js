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

const usage1 = new SimpleGDPR({
  float: 'usage1',
  id: {
    button: 'usage1',
    box: 'usage1',
  }
});

const usage2 = new SimpleGDPR({
  float: 'usage2',
  callback: () => {
    alert('Hi!');
    usage2.close();
  },
  id: {
    button: 'usage2',
    box: 'usage2',
  }
});

const usage3 = new SimpleGDPR({
  float: 'usage3',
  title: 'This website uses cookies.',
  link: './privacypolicy.html',
  id: {
    button: 'usage3',
    box: 'usage3',
  }
});

const usage4 = new SimpleGDPR({
  float: 'usage4',
  theme: 'modern',
  icons: false,
  animation: 'slide',
  id: {
    button: 'usage4',
    box: 'usage4',
  }
});

const usage5 = new SimpleGDPR({
  title: 'Cookies and Cream',
  message: 'Do you want some?',
  link: null,
  icons: true,
  theme: 'material',
  animation: 'slide',
  float: 'usage-5',
  callback: () => {
    usage5.close();
    setTimeout(() => {
      usage5.open();
    }, 1000);
  },
  openOnInit: true,
  id: {
    box: 'my-box-id',
    button: 'my-button-id',
  },
})

const group = document.createElement('div');
const message = document.createElement('span');
const policy = document.createElement('span');

message.innerText = 'My custom message! ';       
policy.innerText = 'Privacy Policy';
policy.classList.add('sgdpr-policy');
policy.addEventListener('click', () => {
  alert('Here are my terms!');
})

group.appendChild(message);
group.appendChild(policy);

const message1 = new SimpleGDPR({
  float:'message1',
  message: group,
});

