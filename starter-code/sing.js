let verses = prompt('How many of bottles of beers would you like?')

var bottles;
for (i = verses; i >= 1; i = i - 1) 
{
    if (i == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(i+" "+bottles+" of beer on the wall.");
    if (i < verses) {
        console.log("------------------------------");
        console.log(i+" "+bottles+" of beer on the wall.");
    }
    console.log(i+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (i == 1) {
        console.log("No bottles of beer on the wall.");
    }
}
