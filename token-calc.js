import GPT3Tokenizer  from 'gpt3-tokenizer';
const tokenizer = new GPT3Tokenizer({ type: 'gpt3' }); // or 'codex'

export default tokenizer;
// const encoded = tokenizer.encode();
// console.log(encoded.text.length)
// const decoded = tokenizer.decode(encoded.bpe);