设计一个支持两种操作的数据结构
void addWord(word)  存储
bool search(word)  搜索

search 可以搜索文字或正则表达式数字， 只包含字母 a-z 或，
，可以表达任何一个字母

addWord("bad")
addWord("dad")
addWord("mad")

search("pad") false
search("bad") true
search(".ad") true
search("b..") true