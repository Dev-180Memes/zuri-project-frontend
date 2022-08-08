<script>
        const accordion = document.getElementsByClassName('ContentBx')
        const accordion2 = document.getElementsByClassName('ContentBx2')
        const accordion3 = document.getElementsByClassName('ContentBx3')
        const accordion4 = document.getElementsByClassName('ContentBx4')
        const accordion5 = document.getElementsByClassName('ContentBx5')

        // To toggle the accordion menu 'All Categories' on the left hand side

    for (i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    }
        // To toggle the accordion menu 'Tablets & Accessories' on the left hand side
    for (i = 0; i < accordion2.length; i++){
        accordion2[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    }
    // To toggle the accordion menu 'Brands' on the left hand side
    for (i = 0; i < accordion3.length; i++){
        accordion3[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    }

    // To toggle the accordion menu 'Online Shop' on the left hand side

    for (i = 0; i < accordion4.length; i++){
        accordion4[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    }
    // To toggle the accordion menu 'Price' on the left hand side

    for (i = 0; i < accordion5.length; i++){
        accordion5[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    }
    </script>
