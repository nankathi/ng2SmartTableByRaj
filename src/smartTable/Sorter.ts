export class Sorter{
    direction:number;
    key:string;
    /**
     *
     */
    constructor() {
        this.direction = 1;
    }

    public sort(key:any, data:any){
        if(this.key === key){
            this.direction = this.direction * -1;   
        }else{
            this.direction = 1;
        }

        this.key = key;

        data.sort((a:any,b:any) => {
            if(a[key] === b[key]){
                return 0;
            }
            else if(a[key] > b[key]){
                return 1* this.direction;
            }
            else{
                return -1* this.direction;
            }
        })
    }
}