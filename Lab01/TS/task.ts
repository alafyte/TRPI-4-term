/*1. Напишите функцию, которая принимает массив из 1 целых чисел (от  до 9)
и возвращает строку этих чисел в виде номера телефона.  Формат номера телефона должен
соответствовать "(xxx) xxx-xxxx".*/
function createNumber(numberArr: number[]) : string {
    if (numberArr.length != 10) return "Неверный формат номера";

    return "(" + numberArr[0] + numberArr[1] + numberArr[2] + ") "
        + numberArr[3] + numberArr[4] + numberArr[5] + "-" + numberArr[6] + numberArr[7] + numberArr[8] + numberArr[9];
}

let num_arr: number[] = [4, 8, 9, 9, 6, 1, 2, 3, 4, 5];

console.log("Задание №1: "+ createNumber(num_arr));

/*2. Если перечислить все натуральные числа до 1, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5, меньше переданного числа.
Кроме того, если число отрицательное, верните . Примечание. Если число кратно и 3, и 5, считайте его только один раз.
*/
export class Challenge {
    static solution(number: number) : number {
        if (number < 0) {
            return;
        }
        else {
            let sum : number = 0;
            for (let i = 0; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0) {
                    sum += i;
                }
            }
            return sum;
        }
    }
}
console.log("Задание №2: " + Challenge.solution(6));

/*3. Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно.*/
function moveArray(arr: number[], step: number) : number[] {
    if (step < 0 || step >= arr.length || arr.length == 0) {
        return [];
    }
    let tempArr : number[] = [];
    for(let i = 0; i < step; i++) {
        tempArr[i] = arr[arr.length - (step - i)];
    }
    for (let i = 0; i < arr.length - step; i++) {
        tempArr[i + step] = arr[i];
    }
    return tempArr;
}
console.log("Задание №3: " + moveArray([1, 2, 3, 4, 5, 6, 7, 8], 2));

/*4. Есть два отсортированных массива nums1 и nums2 размера m и n соответственно,
вернуть медиану двух отсортированных массивов. Медиана число (два числа) находящееся в середине массива.*/
function arrayMedian(arr1: number[], arr2: number[]) : number {
    let sum : number = 0;
    let resultArr : number[] = arr1.concat(arr2);
    resultArr.sort();

    if(resultArr.length % 2 == 0)
    {
        return (resultArr[(resultArr.length / 2) - 1] + resultArr[resultArr.length / 2]) / 2;
    }

    else
    {
        return resultArr[Math.floor(resultArr.length / 2)];
    }
}
console.log(arrayMedian([1, 2], [3, 4]));

/*5. Определите, правильно ли заполнена доска судоку 9 x 9. В решении задачи используйте коллекцию Set. */
let sudokuTable: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [1, 9, 8, 0, 0, 0, 0, 6, 0],

    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],

    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
function sudoku(matrix:number[][]) : string
{
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            if(matrix[i][j] > 9  || matrix[i][j] < -1)
            {
                return "Неверное значение";
            }
            if (!checkSquare(matrix, i, j)) {
                return "Доска неправильная"
            }
        }
    }

    for(let i = 0; i < 9; i++)
    {
        if(!checkRow(matrix, i) || !checkColumn(matrix, i))
        {
            return "Доска неправильная";
        }
    }

    return "Доска правильная";
}

function checkRow(matrix:number[][], k: number) : boolean
{
    let set = new Set<number>();

    for(let i = 0; i < 9; i++)
    {
        if(matrix[k][i] == 0)
        {
            continue;
        }

        if(set.has(matrix[k][i]))
        {
            return false;
        }

        set.add(matrix[k][i]);
    }
    return true;
}

function checkColumn(matrix:number[][], k:number) : boolean
{
    let set = new Set<number>();

    for(let i = 0; i < 9; i++)
    {
        if(matrix[i][k] == 0)
        {
            continue;
        }

        if(set.has(matrix[i][k]))
        {
            return false;
        }

        set.add(matrix[i][k]);
    }
    return true;
}

function checkSquare(matrix:number[][], i:number, j:number) : boolean {
    let set = new Set<number>();
    let startY = Math.floor(i / 3) * 3;
    for (let y2 = startY; y2 < startY + 3; ++y2) {
        let startX = Math.floor(j / 3) * 3;
        for (let x2 = startX; x2 < startX + 3; ++x2) {
            if(matrix[y2][x2] == 0)
            {
                continue;
            }

            if(set.has(matrix[y2][x2]))
            {
                return false;
            }

            set.add(matrix[y2][x2]);
        }
    }
    return true;
}

console.log("Задание №5: " + sudoku(sudokuTable));
