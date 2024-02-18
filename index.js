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

const nextBtn = document.getElementById('nextBtn')
const continueBtn = document.getElementById('continueBtn')


let seatsArray = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']




// ParchenCal
function discountCal(totalTicketPrice, parchen) {

    const discountPrice = totalTicketPrice * parchen / 100
    const payAblePrice = totalTicketPrice - discountPrice

    grandPrice.innerText = payAblePrice
    couponBox.classList.add("hidden")

    discountContent.innerHTML = `<h3>Discount <sup
            class="badge bg-red-500 text-white font-xs">${parchen}%</sup></h3>
         <h3>BDT <span>${discountPrice}</span></h3>`
}

// Coupon Discount Calculation
function discountCalculation(totalTicketPrice) {

    couponBtn.addEventListener('click', () => {
        const couponValue = couponInput.value

        if (couponValue == "") {
            discountContent.innerHTML = `<p class="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Write your Coupon</p>`
        } else if (couponValue === "NEW15") {
            discountCal(totalTicketPrice, 15)

        } else if (couponValue === "Couple 20") {
            discountCal(totalTicketPrice, 20)
        } else {
            discountContent.innerHTML = `<p  class="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Invalid Coupon!</p>`
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


    for (let i = 0; i < seatsArray.length; i++) {

        let seat = document.createElement("td")
        seat.classList.add("bg-gray-100")
        seat.classList.add("m-2")
        seat.classList.add("rounded")
        seat.classList.add("text-center")
        seat.classList.add("cursor-pointer")
        seat.textContent = seatsArray[i]
        seatName.appendChild(seat)


        // Click on seat
        seat.addEventListener('click', () => {

            if (selectedSeatList.includes(seatsArray[i]) == false) {

                if (selectedSeatList.length < 4) {

                    const Avail = AvailableSeat - (selectedSeatList.length + 1)
                    totalSeat.innerText = Avail

                    // Change seat design after click
                    seat.classList.remove("bg-gray-100")
                    seat.classList.add("bg-green-500")
                    seat.classList.add("text-white")
                    selectedSeatList.push(seatsArray[i])

                    // Create selected seat table row and column
                    let row = document.createElement('tr')
                    let cell = document.createElement('td')
                    let cell2 = document.createElement('td')
                    let cell3 = document.createElement('td')
                    cell.textContent = seatsArray[i]
                    cell2.textContent = "Economoy"
                    cell3.textContent = "550"
                    row.appendChild(cell)
                    row.appendChild(cell2)
                    row.appendChild(cell3)
                    selectedSeatItems.appendChild(row)
                } else {
                    alert("You can buy only 4 ticket")
                }

                // Ticket Price Calculation
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

// Close Button
continueBtn.addEventListener("click", () => {
    location.reload()
})


