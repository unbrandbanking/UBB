module.exports = {
    'Demo test Google': function(browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]', 1000)
        .click('input[name=btnK]')
        .pause(1000)
        .assert.containsText('h3', 'Nightwatch.js')
        .end();
    }
  };
  
  module.exports = {
    'Login Test': function(browser) {
      browser
        .url('https://example.com/login')
        .customLogin('testuser', 'password123')
        .assert.urlEquals('https://example.com/dashboard')
        .end();
    }
  };
  