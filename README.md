# NAFCrypto

NAFCrypto is a cryptographic library designed to provide secure and efficient cryptographic operations for various applications.

## Features

- Symmetric encryption and decryption
- Asymmetric encryption and decryption
- Digital signatures
- Hashing algorithms
- Key generation and management

## Installation

To install NAFCrypto, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/NAFCrypto.git
cd NAFCrypto
bun install
bun start
```

## Usage

Here is a simple example of how to use NAFCrypto:

```javascript
const nafcrypto = require("nafcrypto");

// Symmetric encryption
const key = nafcrypto.generateSymmetricKey();
const encrypted = nafcrypto.encryptSymmetric("Hello, World!", key);
const decrypted = nafcrypto.decryptSymmetric(encrypted, key);

console.log(decrypted); // Output: Hello, World!
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [yourname@example.com](mailto:yourname@example.com).
