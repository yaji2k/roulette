new Vue({
    el: '#app',
    data: {
        count: '',
        arr: [],
        winners: [],
        max: 10,
        min: 1,
        theEnd: false,
        edit: true,
        incorrect: false,
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
                            // return;
                        }
                    }
                    setTimeout(() => {
                        this.preload = false;
                    }, 4000);
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
        onEdit() {
            if (+this.min > +this.max) {
                this.incorrect = true;
                return;
            }
            if (this.edit) {
                this.reset();
                this.incorrect = false;
                this.edit = !this.edit;
            } else {
                this.edit = !this.edit;
            }
        }
    },
    // mounted() {
    //     this.setArray();
    // }
});