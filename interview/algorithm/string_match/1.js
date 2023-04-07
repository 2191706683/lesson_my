const WordDictionary = function() {
    this.words = {}  // O(1)
}

// 索引
WordDictionary.prototype.addWord = function(word) {
    if (this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
        this.words[word.length] = [word]
    }
}

WordDictionary.prototype.search = function(word) {
    if (!this.words[word.length]) {
        return false
    }
    const len = word.length
    if (!word.includes('.')) {
        return this.words[len].includes[word]
    }

    const reg = new RegExp(word)
    return this.words[len].some((item) => {
        return reg.test(item)
    })
}