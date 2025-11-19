trigger BikeTrigger on Bike__c (before insert, before update) {
    for(Bike__c bike : Trigger.new) {
        // Example: Automatically set Bike_Status__c if blank
        if(String.isBlank(bike.Bike_Status__c)) {
            bike.Bike_Status__c = 'Active';
        }
    }
}
