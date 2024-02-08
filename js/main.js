var links = document.querySelectorAll("a");
        var url = "";

        links.forEach((link)=>{

            link.addEventListener('click', (e) =>{
                e.preventDefault();

                document.getElementById("loadAjax").classList.add('loading');

                url = link.getAttribute('href');
                setTimeout(()=>{
                    ajaxPage(url);
                },1000)
            })

        })

        ajaxPage = (url) => {


            axios({
                method : 'GET',
                url : !url ? './home.html' : url,
            }).then((response) => {

                document.getElementById("loadAjax").classList.remove('loading');
                document.getElementById("loadAjax").classList.add('loaded');
                
                document.getElementById("main").innerHTML = response.data;
                
                setTimeout(() => {
                    document.getElementById("loadAjax").classList.remove('loaded');
                    document.querySelector('.webdoor').classList.add('loaded');
                }, 1000);

            });

        }

        ajaxPage();