import React from 'react'

export const Team = () => {
    const teamArr = [
        {
            img : "https://s3-alpha-sig.figma.com/img/784c/a048/0a24632f9dad48719238ddf2884a0863?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPdoBJnpbm3yLEj-DiOkBSdE7S9p4pcDtx6Vpgq1biKzJXo7BNqhsvTE2AWKFqAMxlMNrfkqeBHVb4XVK56xcQpyJJcfG~64hEFftjtST-vUmaCkrRFjjxk~f2SfqncRVeD5Xbcaac5r3LDHHoSEtJv7k1az~cEBBuefaH9gI-aLG84aZ5EPfZm85p99eWn3j4gRTvtzI0K~5hJ3C723kFQN6Qf9J5~KkIAr4T8RbuZ7fw9bJFVPCr0MuvGrLl~9pUlSiI3ny-KGuRJyye7xeoyU5fguezVkL1yfGMplrsTuU99wUn3uElAcMisjMtHx1fajlBmTc43tvjXAr6v5xQ__",
            name : "Danial Def",
            cases : "301 ",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/fcbf/a365/10f4e73f38a7ff1fab32f2fc0db010f9?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laQ0Jb4PDXZfpO8nAQtT9q-MzCZuJl9UkcH7gJHNNZgGNUXCHZ-ImsKToH26RQyO-~pALEmgs12OgcA2CN3-Ilfxwasu27JIE1JWD6oxI5GecfHPbnfcN99oIoI5PNIwO6--FgvHhvePyHS~eKnUBycX3YnnSdEpaTnXFzAliWlMOQIsSqgE2WtENpYGUBh8MdUxOgTsNq1hQJVV5QfSSpfqY3Cf~oU~Jf5NpaiyOCWYFRv7lCro6GlNYNFw2Yg0Q0zK4rHeXx~V5FPq3r8Jv4Zho8sR-57Y0KZYkcS0h1ZQhKTrA9TFn1px5115eNBJ4L2RZ-Z0QoyMiHPuojPLpg__",
            name : "Sanfole",
            cases : "850",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/be47/616a/4ce30b5d2f2773c5785f9dc061ceff73?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmTeyctRI85GIr5tN0GuVmJNj-joVjBEEvBy-LDaVEdDbK5tY~6kfmi6yx1BGOuit5QeG~YbUqGNIP9kAzmt4zoV-7TGQknufadhpPz9-a1N5oTvGXAky931xjhqdmgtzX5v8w3uZdswSGxCNDazYy1d9dRY63FBFX~NMBEc4jowhJ0SXdiryAFHZ~ZO-OyFRIrdfGIxMIYDWmNh0ucOdv8ro4kkgVI4rRFfJxU2B3kiQ0Kt0bcc1tCO7meGvycoJuROl7frlX4v-6aW7iTqp0V3KQU4dOqWPQnMCp3bHgHN-u0WL0oInWAGm4xslwAbNdOiQJDqDTY3z~4j5mjh5A__",
            name : "Cesforial",
            cases : "470",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoLcUNsVqZtQiAd4rYegLD0asFELIzzPVeCVU29ufjmQS2iwdoNXxwnl4eGZhSKO~2Csl4Y7v6bVFUhXe08DyJBFLMn9CpHaloKR379Fg3h23nj9L3UBZUZ3GfdM1FOaXKkyxYixDU8UpuVcXj64ex-GQ8FQMUaosp8yuJKJkXh9UvCIxoicfpWrwgPnh89zv6EdeTKphduR6bJaqq-LD77CxteC9VhUoicH9kl3TvYYytr3gdSLC7kZMjx9ctCXix4b7dzSWV1AcC61HONiAqmVjwfxIKi-FqzPzZDOClhQop~StHI55FAPFzJiVrmECmWF1tM-LaHyDZM5zLNhjg__",
            name : "Calleen",
            cases : "180",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/7c39/0357/7eb6afb7619fa84a07e3dd6f32a0f3d2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0eQfeRAGqyh-ZDCo40EPHRk38tOTPTyhSVAawCn7O103eKt4KdSYndOIZlX5K~noDNJGkjY2vGqAntQPQXQ8mj1ZGsRVIH~kbYY4ZAy4~~lgwT7x0xauaomJui2FB-CShdeoaSSjGC~Rl~Ht32es3QtiT0bwlEgbmJq8Ar-aNQ3uxspFx4csKwFE9NrtXMhnPIgk62IF0aTWrCQE07zGZhOHxUD8-nELohO4ZXmj0cqX9HxFaSxEzV4YYvc1w8I8Cptx9w9HefeFVFfUlLIhvoRG32QqS3zJYJPPLu8XB~LkTeIceMVQ7cE7KoUfDT76h-pJnlMrZSqcKTs-dE1hQ__",
            name : "Haldone",
            cases : "212",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/d049/c93c/f2e5d156c527337371de70eef0230a60?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQArUJlDUbZv7YxD4SnK3i27gCAMGje3e1gCuNGsDh7PDDG7Ur7VsgJaua420iMYpzzCrD2OeJ9mpiSUZzkG8ZOQiJ69GybXGcNwjdS8N5DGlDQq75gJ2lvj1jyaxbyy-c-TrnwGAMK2DWXV4Vki~1s-2gxGaxf8HavG~b1tL9vL9mG80QG937SmwLoPMGBEzXVQZu~z6wltZ4ei7x1m-XaokICFN-zmT7SyRmSGM6cFcz11jhJBTc83YXwKeNrTerz15GRg6pVbs~4usZmeaj0IaHYvkZiWfiXK2r8aSWKkvS6FCzj784ZZUCJLyGxeWhpSdya4t1AUW9VBY5DMBA__",
            name : "nik jeo",
            cases : "350",
        },
    ]
    return (
        <section className=' container mt-[2rem]'>
            <h1 className=' text-white text-[2.9rem] text-center'>Our Team</h1>
            <div className=' grid grid-cols-3 gap-5 mt-[2rem]'>
                {teamArr.map((ele) => (
                    <div key={ele.cases} className=' rounded-md cursor-pointer hover:bg-[#E3B748] p-3 flex items-center gap-3'>
                        <div className=' h-full'>
                            <img className='h-[4rem] w-[4rem] object-cover rounded-full' src={ele.img} alt="" />
                        </div>
                        <div className=' h-full flex items-start flex-col justify-center'>
                            <h1 className=' text-stone-100'>{ele.name}</h1>
                            <p className=' text-stone-600'>{ele.cases} Cases</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
