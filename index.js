const seatName = document.getElementById('seatName')
const selectedSeatTotal = document.getElementById('selectedSeatTotal')
const totalSeat = document.getElementById('totalSeat')
const totalPrice = document.getElementById('totalPrice')
const grandPrice = document.getElementById('grandPrice')
const couponInput = document.getElementById('couponInput')
const couponBtn = document.getElementById('couponBtn')
const couponBox = document.getElementById('couponBox')
const discountContent = document.getElementById('discountContent')
const selectedSeatItems = document.getElementById('selectedSeatItems')


const userName = document.getElementById('userName')
const userPhone = document.getElementById('userPhone')
const userEmail = document.getElementById('userEmail')
const nextBtn = document.getElementById('nextBtn')




let seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']


function idSelector(idName) {
    const btn = document.getElementById(idName)
    return btn
}


// Coupon Discount Calculation
function discountCalculation(totalTicketPrice) {

    couponBtn.addEventListener('click', () => {
        const couponValue = couponInput.value

        if (couponValue == "") {
            discountContent.innerHTML = `<p
            class="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Write your Coupon</p>`
        } else if (couponValue === "NEW15") {
            const discountPrice = totalTicketPrice * 15 / 100
            const payAblePrice = totalTicketPrice - discountPrice

            grandPrice.innerText = payAblePrice
            couponBox.classList.add("hidden")

            discountContent.innerHTML = `<h3>Discount <sup
            class="badge bg-red-500 text-white font-xs">15%</sup></h3>
         <h3>BDT <span>${discountPrice}</span></h3>`



        } else if (couponValue === "Couple20" || couponValue === "Couple 20") {
            const discountPrice = totalTicketPrice * 20 / 100
            const payAblePrice = totalTicketPrice - discountPrice
            grandPrice.innerText = payAblePrice
            couponBox.classList.add("hidden")

            discountContent.innerHTML = `<h3>Discount <sup
            class="badge bg-red-500 text-white font-xs">20%</sup></h3>
         <h3>BDT <span>${discountPrice}</span></h3>`
        } else {
            discountContent.innerHTML = `<p
            class="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Invalid Coupon!</p>`
        }


    })


}


// Total Price Calculation

function totalPriceCalculation(ticketPrice) {

    totalPrice.innerText = ticketPrice
    grandPrice.innerText = ticketPrice

    // Discount Calculation function call
    discountCalculation(ticketPrice)

}

// Button Disabled

function disabledBtn(e) {
    return e.removeAttribute("disabled")
}

function seatPlane() {



    let selectedSeatList = []
    const AvailableSeat = parseInt(totalSeat.innerText)



    for (let i = 0; i < seats.length; i++) {

        let seat = document.createElement("td")
        seat.classList.add("bg-gray-100")
        seat.classList.add("m-2")
        seat.classList.add("rounded")
        seat.classList.add("text-center")
        seat.classList.add("cursor-pointer")
        seat.textContent = seats[i]
        seatName.appendChild(seat)


        seat.addEventListener('click', () => {

            if (selectedSeatList.includes(seats[i]) == false) {


                if (selectedSeatList.length < 4) {

                    const Avail = AvailableSeat - (selectedSeatList.length + 1)
                    totalSeat.innerText = Avail


                    seat.classList.remove("bg-gray-100")
                    seat.classList.add("bg-green-500")
                    selectedSeatList.push(seats[i])


                    let row = document.createElement('tr')
                    let cell = document.createElement('td')
                    let cell2 = document.createElement('td')
                    let cell3 = document.createElement('td')
                    cell.textContent = seats[i]
                    cell2.textContent = "Economoy"
                    cell3.textContent = "550"
                    row.appendChild(cell)
                    row.appendChild(cell2)
                    row.appendChild(cell3)
                    selectedSeatItems.appendChild(row)
                } else {
                    alert("You can buy only 4 ticket")
                }



                let ticketPrice = selectedSeatList.length * 550
                selectedSeatTotal.innerText = selectedSeatList.length
                totalPriceCalculation(ticketPrice)

                if (selectedSeatList.length > 0) {

                    disabledBtn(nextBtn)
                }
                if (selectedSeatList.length > 3) {
                    disabledBtn(couponBtn)
                    disabledBtn(couponInput)
                }

            }
        })

    }



}


seatPlane()


// Next Button Function

nextBtn.addEventListener("click", (e) => {
    e.preventDefault()
})



