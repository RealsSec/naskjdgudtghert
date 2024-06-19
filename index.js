$(document).ready(function() {
    $('#purchaseButton').click(function() {
        var selectedVariant = $('#variant').val();
        var selectedCoupon = $('#coupon').val();
        var selectedEmail = $('#email').val();
        var selectedPaymentMethod = $('#paymentMethod').val();
        var selectedCount = $('#quantity').val();

        var invoiceData = {
            product: 32654,  // Replace with your actual product ID from SellAuth
            variant: selectedVariant,
            coupon: selectedCoupon,
            gateway: selectedPaymentMethod,
            email: selectedEmail,
            amount: selectedCount
        };

        $.ajax({
            url: 'https://sellauth.com/api/v1/invoice/create',
            method: 'POST',
            data: invoiceData,
            success: function(response) {
                window.location.href = response.url; // Redirect user to invoice URL
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#errorAlert').text(errorThrown).show(); // Display error message
            }
        });
    });
});
