function phoneNumberDirectory(phoneNumbers) {
  const phoneNumberDirectory = new Map();

  for (const entry of phoneNumbers) {
    const [name, phoneNumber] = entry.split(':');

    phoneNumberDirectory.set(name, phoneNumber);
  }

  return phoneNumberDirectory
}

module.exports = phoneNumberDirectory;
