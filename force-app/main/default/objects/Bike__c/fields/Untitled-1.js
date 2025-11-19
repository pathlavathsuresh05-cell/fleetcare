trigger BikeTrigger on Biker__c (before insert, before update) {
    // Your trigger logic goes here)
    for (Bike__c bike: Trigger.new) {
        //Example:Automatically set bike status__c if blanck
        if (String.isblanck(bike.Bike_status__c)) {
            bike.Bike_status__c = 'Active';
        }
        
    }
}