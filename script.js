const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");
const prices = document.querySelectorAll(".price");
const billingUnits = document.querySelectorAll(".billing-unit");
const billedNotes = document.querySelectorAll(".billed-note");

function setBillingPeriod(period) {
  const isMonthly = period === "monthly";

  prices.forEach((price) => {
    price.textContent = Number(price.dataset[period]).toLocaleString("en-IN");
  });

  billingUnits.forEach((unit) => {
    unit.textContent = isMonthly ? "per month" : "per year";
  });

  billedNotes.forEach((note) => {
    note.textContent = isMonthly ? "Billed monthly" : "Billed annually";
  });

  monthlyButton.classList.toggle("active", isMonthly);
  yearlyButton.classList.toggle("active", !isMonthly);
  monthlyButton.setAttribute("aria-pressed", String(isMonthly));
  yearlyButton.setAttribute("aria-pressed", String(!isMonthly));
}

monthlyButton.addEventListener("click", () => setBillingPeriod("monthly"));
yearlyButton.addEventListener("click", () => setBillingPeriod("yearly"));
setBillingPeriod("monthly");

// Plan buttons open an accessible confirmation dialog with the current billing choice.
const planModal = document.getElementById("planModal");
const closeModalButton = document.getElementById("closeModal");
const confirmPlanButton = document.getElementById("confirmPlan");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPlanName = document.getElementById("modalPlanName");
const modalPrice = document.getElementById("modalPrice");
const modalBilling = document.getElementById("modalBilling");
let lastFocusedElement = null;

document.querySelectorAll(".plan-select").forEach((button) => {
  button.addEventListener("click", () => {
    const planName = button.dataset.plan;
    const currentPeriod = yearlyButton.getAttribute("aria-pressed") === "true" ? "yearly" : "monthly";
    const priceElement = button.closest(".plan-card").querySelector(".price");
    const price = Number(priceElement.dataset[currentPeriod]).toLocaleString("en-IN");

    lastFocusedElement = button;
    modalTitle.textContent = `You picked ${planName}!`;
    modalDescription.textContent = "Here’s a quick look at your selected plan.";
    modalPlanName.textContent = `${planName} plan`;
    modalPrice.textContent = `₹${price}`;
    modalBilling.textContent = currentPeriod === "monthly"
      ? "per month · billed monthly"
      : "per year · billed annually";

    planModal.hidden = false;
    document.body.classList.add("modal-open");
    closeModalButton.focus();
  });
});

function closePlanModal() {
  planModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

closeModalButton.addEventListener("click", closePlanModal);
confirmPlanButton.addEventListener("click", closePlanModal);
planModal.addEventListener("click", (event) => {
  if (event.target === planModal) closePlanModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !planModal.hidden) closePlanModal();
});

// Contact demo form validates locally and clearly explains that it does not send data.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = document.getElementById("contactName").value.trim();
  formStatus.textContent = `Thanks, ${name}! Your demo message is ready — no message was sent or stored.`;
  formStatus.classList.add("success");
  contactForm.reset();
});
