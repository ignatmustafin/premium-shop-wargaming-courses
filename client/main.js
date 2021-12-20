import { reqAuthGet, reqAuthPost, reqNotAuthGet, reqAuthDelete } from "./views/request/axios.js"
import pagination from "./views/mainViews/pagination.js"
import filters from "./views/mainViews/filters.js"
import currency from "./views/mainViews/currency.js"
import itemLink from "./views/mainViews/solo.item.js"
import {deleteAllItemsFromCart} from "./client_controller/client.cart.controller.js"


document.addEventListener("DOMContentLoaded", async () => {
    if(window.location.pathname === "/favorite") {
        const container = document.getElementById("main_items")
        const response = await reqAuthGet(`/favorites?id=${localStorage.id}`, localStorage.token)
        return await pagination(container, response)
    } 
    if(window.location.pathname === "/cartPage") {  
        const container = document.getElementById("main_items")
        container.insertAdjacentHTML("afterend", 
        `
        <button id="deleteFromCart" type="button">Удалить все товары с корзины</button>
        `
        )
        const allProd = document.getElementById("deleteFromCart")
        
        await deleteAllItemsFromCart(allProd)

        const response = await reqAuthGet(`/cart?id=${localStorage.id}`, localStorage.token)
     
        const forCart = () => `<button type="button" class="deleteProductFromCart">Уюрать из корзины</button>`
        await pagination(container, response, forCart)
        return;
    } 
    if(window.location.pathname === "/gold") {
        const container = document.getElementById("main_items")
        container.innerHTML = ``
        const res = await reqAuthGet("/currency", localStorage.token)
        await filters(container, res)
        return await pagination(container, res)
    }
    if(window.location.pathname === "/vehicle") {
        const container = document.getElementById("main_items")
        const res = await reqNotAuthGet("/vehiclesPage")
        const filtersElement = document.getElementById("filters")
        await filters(container, res)

        
        
        return await pagination(container, res)
    }
    if(window.location.pathname === "/premium") {
        const container = document.getElementById("main_items")
        const res = await reqNotAuthGet("/premiumPage")
        console.log(res)
        await filters(container, res)
        await pagination(container, res)
        return;
    }

    const container = document.getElementById("main_items")
    const res = await reqAuthGet("/items", localStorage.token)

    await pagination(container, res)

    // filters
    await filters(container, res)


    //favorites
    

    // currency logic (limited requests, don't uncomment w/o reason)
    // await currency()
    
    // each shop card
    

})
async function postItem() {
    const name = document.getElementById("name_field").value
    const price = document.getElementById("price_field").value
    const data = { name, price: +price }
    await reqAuthPost("/items", localStorage.token, JSON.stringify(data))
    location.reload()
}
const postButton = document.getElementById("post_btn")
postButton.onclick = () => {
    // postItem()
}
const signInButton = document.getElementById("sign_in")
signInButton.onclick = () => {
    window.location.href = "/auth"
}
const logOutButton = document.getElementById("log_out")
logOutButton.onclick = () => {
    localStorage.token = ''
    localStorage.role = []
    window.location.href = "auth"
}
await itemLink()

gold_route.onclick = async () => {
    window.location.href = "/gold"
    
}

const fav = document.getElementById("favorite")
fav.onclick = async () => {
    window.location.href = '/favorite'
}

const cart = document.getElementById("cart")
cart.onclick = async () => {
    window.location.href = '/cartPage'
    
}

const allProd = document.getElementById("allProducts")
allProd.onclick = async () => {
    window.location.href = '/'
}

const vehicles = document.getElementById("vehicles")
vehicles.onclick = async () => {
    window.location.href = '/vehicle'
}

const premium = document.getElementById("premium")
premium.onclick = async () => {
    window.location.href = '/premium'
}

const userOffice = document.getElementById("office")
userOffice.onclick = async () => {
    window.location.href = "/office"
}









