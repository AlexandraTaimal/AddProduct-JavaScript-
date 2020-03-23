class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    }
}

class UI {

    addproduct(product) {

        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `

        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name </strong> : ${product.name} &nbsp
                <strong>Product Price </strong> : ${product.price} &nbsp
                <strong>Product Year </strong> : ${product.year} &nbsp
                <a href=# class="btn btn-danger" name="delete"> Delete</a>
             </div>
        </div>
        
        `;

        //Insert Product
        productList.appendChild(element);
        this.resetForm(); //clear form

    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {

        if (element.name === 'delete') {
            //  console.log(element.parentElement.parentElement.parentElement.remove())
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Delet Successfully', 'alert alert-info text-center');
        }

    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert - ${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //showing in DOM

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {

            document.querySelector('.alert').remove();
        }, 2000);

    }
}


document.getElementById('product-form').addEventListener('submit', function(e) {

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    // console.log(name, price, year);

    const product = new Product(name, price, year);
    //create instancia
    const ui = new UI();

    if (name === '' || price === '' || year === '') {

        return ui.showMessage('Complete Fields Please', 'alert alert-danger');

    }


    ui.addproduct(product);
    ui.resetForm(); //clear the form
    ui.showMessage('Product Added Successfully', 'alert alert-success text-center');

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);

});