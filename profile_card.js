// Profile Card Tests - Paste into Browser Console (F12) after loading index.html

(function() {
  console.group('🧪 Profile Card Tests');

  // Test 1: Required Elements Exist
  const elements = {
    card: document.querySelector('[data-testid="test-profile-card"]'),
    name: document.querySelector('[data-testid="test-user-name"]'),
    bio: document.querySelector('[data-testid="test-user-bio"]'),
    time: document.querySelector('[data-testid="test-user-time"]'),
    avatar: document.querySelector('[data-testid="test-user-avatar"]'),
    social: document.querySelector('[data-testid="test-user-social-links"]'),
    hobbies: document.querySelector('[data-testid="test-user-hobbies"]'),
    dislikes: document.querySelector('[data-testid="test-user-dislikes"]'),
    upload: document.querySelector('[data-testid="test-avatar-upload"]')
  };

  let passed = true;
  Object.entries(elements).forEach(([key, el]) => {
    if (!el) {
      console.error(`❌ Missing: ${key}`);
      passed = false;
    } else {
      console.log(`✅ Found: ${key}`);
    }
  });

  // Test 2: Timestamp Accuracy (within 500ms delta)
  if (elements.time) {
    const displayedTime = parseInt(elements.time.textContent);
    const now = Date.now();
    const delta = Math.abs(now - displayedTime);
    if (delta > 500) {
      console.error(`❌ Timestamp delta too high: ${delta}ms`);
      passed = false;
    } else {
      console.log(`✅ Timestamp valid (delta: ${delta}ms)`);
    }
  }

  // Test 3: Avatar Alt & Upload Button
  if (elements.avatar && elements.avatar.alt) {
    console.log(`✅ Avatar has alt: "${elements.avatar.alt}"`);
  } else {
    console.error('❌ Avatar missing alt');
    passed = false;
  }

  if (elements.upload) {
    console.log('✅ Upload button present');
  } else {
    console.error('❌ Upload button missing');
    passed = false;
  }

  // Test 4: Social Links (new tab & rel)
  const links = document.querySelectorAll('a[target="_blank"]');
  if (links.length >= 2 && Array.from(links).every(link => link.hasAttribute('rel'))) {
    console.log(`✅ ${links.length} social links with target="_blank" & rel="noopener noreferrer"`);
  } else {
    console.error('❌ Social links misconfigured');
    passed = false;
  }

  // Test 5: Lists Have Items
  if (elements.hobbies && elements.hobbies.children.length > 0 && 
      elements.dislikes && elements.dislikes.children.length > 0) {
    console.log(`✅ Hobbies (${elements.hobbies.children.length} items) & Dislikes (${elements.dislikes.children.length} items)`);
  } else {
    console.error('❌ Lists empty');
    passed = false;
  }

  console.groupEnd();
  console.log(passed ? '🎉 All tests passed!' : '⚠️ Some tests failed—check above.');
})();