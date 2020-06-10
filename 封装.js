var events = {
    cellInput: { // 当前列隐藏的文本框
        index: 1,
        tagName: "input",
    },
    cellP: { //当前列显示的P标签
        index: 1,
        tagName: "p",
    },
    //删除按钮的事件
    del: function(e) {
        console.log(this.innerText);
        var index = e.currentTarget.getAttribute("data-songkun");
        var res = confirm("是否删除？当前的索引是   " + index);
        //true 和 false
        if (res == true) {
            console.log('已经删除!');
            userlist.splice(index, 1);
            reload();
        } else if (res == false) {
            console.log('取消删除!');
        }
    },
    //编辑按钮的事件
    edit: function(e) {

        this.cellInput.input = e;
        this.cellP.input = e;
        this.cells(this.cellInput).style.display = "block";
        this.cells(this.cellP).style.display = "none";

        e.parentNode.parentNode.cells[1].querySelector("input").value = e.parentNode.parentNode.cells[1].querySelector("p").innerHTML;
        var array = e.parentNode.querySelectorAll("button");
        for (var i = 0; i < array.length; i++) {
            if (array[i].innerText == "编辑" || array[i].innerText == "删除") {
                array[i].style.display = "none";
            }
            if (array[i].innerText == "保存" || array[i].innerText == "取消") {
                array[i].style.display = "block";
            }
        }
    },
    save: function(e) {
        this.cellInput.input = e;
        this.cellP.input = e;
        this.cells(this.cellInput).style.display = "none";
        this.cells(this.cellP).style.display = "block";

        e.parentNode.parentNode.cells[1].querySelector("p").innerHTML = e.parentNode.parentNode.cells[1].querySelector("input").value;

        var array = e.parentNode.querySelectorAll("button");
        for (var i = 0; i < array.length; i++) {
            if (array[i].innerText == "编辑" || array[i].innerText == "删除") {
                array[i].style.display = "block";
            }
            if (array[i].innerText == "保存" || array[i].innerText == "取消") {
                array[i].style.display = "none";
            }
        }
    },
    canel: function(e) {
        this.cellInput.input = e;
        this.cellP.input = e;
        //this => events
        this.cells(this.cellInput).style.display = "none";
        this.cells(this.cellP).style.display = "block";

        var array = e.parentNode.querySelectorAll("button");
        for (var i = 0; i < array.length; i++) {
            if (array[i].innerText == "编辑" || array[i].innerText == "删除") {
                array[i].style.display = "block";
            }
            if (array[i].innerText == "保存" || array[i].innerText == "取消") {
                array[i].style.display = "none";
            }
        }
    },
    show: function() {
        //console.log(this.name)
        var showinfo = function() {
            console.log(this.name);
        }
        showinfo.bind(this)();
    },
    //表格的按钮事件
    function tabBtn(e) {
        events[this.getAttribute("data-type")].call(events, this);
    }
}