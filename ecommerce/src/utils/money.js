export function formatMoney(amoutCents){
    if(amoutCents>=0) return `$${(amoutCents / 100).toFixed(2)}`;
    return `-$${((amoutCents / 100)*-1).toFixed(2)}`;
}