# Node.js-File-Crawler


A simple Node.js project to **recursively crawl directories** and list all files and subfolders using `fs.readdir()` and `path`.

Great for learning how to navigate and read directory structures programmatically in Node.js.

---

## 📂 What It Does

- Starts at a specified directory.
- Logs each file and subdirectory (recursively).
- Uses asynchronous filesystem methods.
- Neatly separates files and folders with logging.

---

## 🚀 How to Use

### 1. 📦 Clone or Download

```bash
git clone https://github.com/your-username/dir-crawler.git
cd dir-crawler
````

### 2. 🏁 Run the Script

```bash
node crawler.js
```

This starts crawling from the **current directory (`./`)** by default.

---

## 🧪 Sample Structure

Your current folder setup:

```
dir-crawler/
├── crawler.js
├── package.json
└── sample/
    ├── sample.txt
    └── test.txt
```

*Expected Output:*

```
Directory: sample
File: sample/sample.txt
File: sample/test.txt
```

---

## 🛠️ How It Works

* Uses `fs.readdir()` with `{ withFileTypes: true }` to differentiate files and directories.
* Uses `path.join()` to safely build full paths.
* Recursively processes each subdirectory using depth-first traversal.

---

## 💡 Modify the Start Directory

By default, it starts from the current folder (`"./"`).
You can change it by editing the following line in `crawler.js`:

```js
const startingDirectory = "./sample"; // or any absolute/relative path
```

---

## 📄 License

MIT – Free to use, learn from, or modify.

---

## ✨ Author

Made with ❤️ by [Jay Prakash Valecha](https://github.com/JPV2207)
