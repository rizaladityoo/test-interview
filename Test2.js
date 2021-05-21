/*
# Test JS - Backend Developer #

Task :
1. Isikan proses di dalam fungsi _mergeSortArray() untuk menyatukan array int a dan array int b. Lalu setelah itu di sort secara ascending.
2. Isikan proses di dalam fungsi _getMissingData() untuk mencari integer yang hilang berdasarkan pola angka dari hasil fungsi _mergeSortArray().
3. Isikan proses di dalam fungsi _insertMissingData() untuk memasukkan integer yang hilang dari hasil fungsi _getMissingData() ke dalam array hasil fungsi _mergeSortArray().
4. Hasil yang diharapkan adalah pola angka yang tersusun tanpa ada integer yang hilang.
5. Nilai plus jika dapat mengimplementasikan mengenai Promise / async - await

Syarat :
1. Tidak menggunakan fungsi bawaan JS seperti 
	a. Array.concat()
	b. Array.join()
	c. Array.sort()
	d. dsb.
2. Kerjakan menggunakan logic pemograman anda sendiri

Selamat Mengerjakan
*/

class Test{

    _mergeSortArray(a,b){
        let temp;
        for(let i in b){
            a.push(b[i])
        }
        for(let y=0; y < a.length; y++){
            for(let x=0; x < a.length; x++){
                if(a[y]>a[x] && x > y){
                    temp = a[y]
                    a[y] = a[x]
                    a[x] = temp
                }
            }
        }
        // return [];
        return a;
    }

    _getMissingData(c){
        let count = 12
        for(let x = 0; x < c.length-1; x++){
            if(c[x+1] !== c[x] + count){
                return c[x]+count
            }
            count++
        }
    }

    _insertMissingData(c,i){
        let count = 12
        for(let x = 0; x < c.length-1; x++){
            if(c[x+1] !== c[x] + c){
                c[x] = c[x]+count
            }
            count++
        }
        
        return c;
    }

    main(){

        console.log("START");

        const a = [11,36,65,135,98];
        const b = new Array();
        b.push(81);
        b.push(23);
        b.push(50);
        b.push(155);

        const c = this._mergeSortArray(a,b);
        const i = this._getMissingData(c);
        const final_result = this._insertMissingData(c,i);

        console.log("RESULT : ", final_result);
    }
}

const test_run = new Test();
test_run.main();