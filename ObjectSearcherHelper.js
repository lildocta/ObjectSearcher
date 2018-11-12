({
	hideDropdown : function(component, event, helper) {
        
        var objSearch = component.find("objSearchDropdown");
        $A.util.removeClass(objSearch, 'slds-is-open');
        
    },
    
    findSObjects : function(component, event, helper){
        debugger;
        var objType = component.get('v.objectType');
        var initialSearch = component.find("searchInputId").get("v.value");
        if(initialSearch != null && initialSearch != ''){
            if(initialSearch.length != 1){
                var action = component.get('c.searchForSObject');
                var fields = component.get('v.sObjectFields');
                action.setParams({
                    'objectFields' : fields,
                    'searchValue' : initialSearch,
                    'objectType' : objType
                });
                action.setCallback(this, function(response){
                    debugger;
                    var objectLists = response.getReturnValue();
                    var objectList = objectLists[0];
                    console.log(objectList);
                    if(objectList.length == 0){
                        component.set("v.noResults", true);
                    } else {
                        component.set("v.noResults", false);
                    }
                    component.set('v.searchValues', objectList);
                    var objSearch = component.find("objSearchDropdown");
                    $A.util.addClass(objSearch, 'slds-is-open');
                });
                $A.enqueueAction(action);
            }
        } else {
            helper.hideDropdown(component, event, helper);
        }
    },
    
    newToastEvent : function(component,event,helper,title,message,type){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title":title,
            "message":message,
            "type":type
        });
        toastEvent.fire();
    }, 
})