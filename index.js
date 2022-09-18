console.log('\n/************************* Shallow copy **************************/\n')
const profile = ['jon', { hobby: ['game', 'running'] }]
// 浅いコピーを作成、１階層のみコピーされます
const profileCopy = [...profile]

// コピー先のhobby値を書き換えてもコピー元の値も変わる
profileCopy[1].hobby[0] = 'reading'
console.log('\nprofileCopyのhobbyをreadingに書き換える:', profileCopy);
console.log('コピー元も値は変わる:', profile);

// コピー元のhobby値を書き換えるとコピー先も変わる
profile[1].hobby[0] = 'cooking'
console.log('\nprofileのhobbyをcookingに書き換える:', profile);
console.log('コピー先も値は変わる:', profileCopy);


// コピー元のjonはコピーされてるので、書き換えてもコピー先は変わらない
profile[0] = 'mai'
console.log('\nprofileのjonを書き換える:', profile);
console.log('jonは参照ではなくコピーされてるので\nコピー元を書き換えてもコピー先の値は変わらない:', profileCopy);


console.log('\n/**************************** Deep copy ****************************/\n')
const menu = ['coffee', {salad: ['chikin salad', 'tomato salad']}]
// 深いコピーを作成、全ての階層がコピーされます
const menuCopy = JSON.parse(JSON.stringify(menu))

// コピー先のsalad値を書き換える
menuCopy[1].salad[0] = 'caesar salad'
console.log('\nmenuCopyのsaladを書き換える:', menuCopy);
console.log('コピー元に影響はない:', menu)

// コピー元のcoffeeを書き換える
menu[0] = 'drink'
console.log('\nmenuのcoffeeを書き換える:', menu);
console.log('コピー先に影響はない:', menuCopy);

