new Vue({
    el: '#app',
    data: {
        count: '',
        arr: [],
        winners: [],
        max: 10,
        min: 1,
        theEnd: false,
        preload: false
    },
    methods: {
        getCount() {
            if (this.arr.length > 0) {
                this.preload = true;
                var count = this.getInt();
                if (this.arr.indexOf(count) === -1) {
                    this.getCount();
                } else {
                    for (let i = 0; i < this.arr.length; i++) {
                        if (this.arr[i] === count) {
                            this.count = count;
                            this.arr.splice(i, 1);
                            setTimeout(() => {
                                this.preload = false;
                             }, 4000);
                            return;
                        }
                    }
                }
            } else {
                this.theEnd = true;
            }
        },
        getInt() {
            var get = Math.round(Math.random() * (+this.max - (+this.min))) + (+this.min);
            return get;
        },
        setArray() {
            for (let i = +this.min; i <= +this.max; i++) {
                this.arr.push(i);
            }
        },
        clearArray() {
            this.arr = [];
        },
        reset() {
            if (!this.preload) {
                this.clearArray();
                this.setArray();
                this.theEnd = false;
                this.count = '';
            }
        },
        changeMin(value) {
            if(value !== undefined){
                this.min = value;
                this.reset();
                console.log('min change');
            }

        },
        changeMax(value) {
            if(value !== undefined){
                this.max = value;
                this.reset();
                console.log('max change');
            }

        }
    },
    created() {
        this.setArray();
    }
});