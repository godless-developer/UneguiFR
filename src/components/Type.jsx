import "../styles/types.css"

const typeItems = [
    {
        imgUrl: "https://www.unegui.mn/static/images/new_buildings/category_icon.png",
        name: "Шинэ үл хөдлөх "
    },
    {
        imgUrl: "https://cdn1.unegui.mn/media/jobs.png",
        name: "Ажлын зар"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/electro_.png",
        name: "Цахилгаан бараа"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/health.png",
        name: "Эрүүл мэнд, гоо сайхан, хүнс"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/re-sale.png",
        name: "Үл хөдлөх"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/kids_.png",
        name: " Хүүхдийн бараа"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/house_.png",
        name: " Гэр ахуйн бараа"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/pets.png",
        name: " Мал амьтан, ургамал"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/motors.png",
        name: "Автомашин"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/comps.png",
        name: " Компьютер сэлбэг хэрэгсэл"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/services.png",
        name: " Төхөөрөмж, материал, түлш"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/business2.png",
        name: " Үйлчилгээ "
    },
    {
        imgUrl: "https://cdn1.unegui.mn/media/clothes.png",
        name: "Хувцас хэрэглэл"
    },
    {
        imgUrl: "https://cdn1.unegui.mn/media/phones.png",
        name: "Утас, дугаар"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/hobbies.png",
        name: "Амралт, спорт, хобби"
    },
    {
        imgUrl: "	https://cdn1.unegui.mn/media/free.png",
        name: "Үнэгүй өгнө"
    },
]

export default function Type() {
    return (
        <div className="typeContainer">
            {
                typeItems.map((set) => {
                    return (
                        <div className="typeContent">
                            <img src={set.imgUrl} alt="" />
                            <p>{set.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}