({
    
    enterSearch : function(component, event, helper){
        if(event.which == 13){
            helper.findSObjects(component, event, helper);
        }
    },
    
    buttonSearch : function(component, event, helper){
        debugger;
        helper.findSObjects(component, event, helper);
    },
    
    displayObj : function(component, event, helper){
        var objVals = event.target.value;
        var objValList = objVals.split("/");
        var objId = objValList[0];
        var objName = objValList[1];
        debugger;
        component.set('v.searchTerm', objName);
        component.set('v.selectedObjectId', objId);
    },
    
    navigateToSObject : function(component, event, helper) {
        var recId = event.target.value;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recId
        });
        navEvt.fire();
    },
    
    
    hideDropdownTimer : function(component, event, helper) {
        window.setTimeout(
            $A.getCallback(function() {
                helper.hideDropdown(component, event, helper);
            }), 200
        );  
    },
    
    handleLoad : function(component){
        
    },
    
    handleSubmit : function(component, event, helper){
        
    },
    
    handleSuccess : function(component, helper){
        var title= "Success!";
        var message= "Case has been saved successfully.";
        var type = "success";
        helper.newToastEvent(component,event,helper,title,message,type) 
    }
    
    
})