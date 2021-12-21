function getFlag(flag){
    switch (flag) {
        case "china":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIxIDE0Ij48cGF0aCBmaWxsPSIjQUUwRjBEIiBkPSJNMCAwaDIxdjE0SDB6Ii8+PHBhdGggZmlsbD0iI0ZFRDUxNCIgZD0iTTUuNTUxIDUuMTE2TDYuMiA3IDQuNSA1LjgzNiAyLjgwMSA3bC42NDktMS44ODQtMS43LTEuMTY0aDIuMTAxTDQuNSAyLjA2N2wuNjQ5IDEuODg1SDcuMjV6bTMuMjMtMy4xNTVsLjE2Mi40NzEtLjQyNS0uMjkxLS40MjUuMjkxLjE2Mi0uNDcxLS40MjUtLjI5MWguNTI1bC4xNjMtLjQ3Mi4xNjIuNDcyaC41MjZ6bTAgNS41MzRsLjE2Mi40NzEtLjQyNS0uMjkxLS40MjUuMjkxLjE2Mi0uNDcxLS40MjUtLjI5MmguNTI1bC4xNjMtLjQ3MS4xNjIuNDcxaC41MjZ6bTEuOTUtMS41ODhsLjE2My40NzItLjQyNS0uMjkyLS40MjUuMjkyLjE2Mi0uNDcyLS40MjUtLjI5MWguNTI1bC4xNjMtLjQ3MS4xNjIuNDcxaC41MjV6bTAtMi40NTRsLjE2My40NzEtLjQyNS0uMjkxLS40MjUuMjkxLjE2Mi0uNDcxLS40MjUtLjI5MmguNTI1bC4xNjMtLjQ3MS4xNjIuNDcxaC41MjV6Ii8+PC9zdmc+"
        case "czech":  
            return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAxNCI+PHBhdGggZmlsbD0iI0FFMEYwRCIgZD0iTTAgMGgyMXYxNEgweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBoMjF2N0gweiIvPjxwYXRoIGZpbGw9IiMwMDJCNzAiIGQ9Ik0wIDBsMTAgNy0xMCA3eiIvPjwvc3ZnPg==" 
        case "france":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMSAxNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjF2MTMuOTk5SDB6Ii8+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjRkZGIi8+PHBhdGggZmlsbD0iIzAwMkI3MCIgZD0iTTAgMGg3djE0SDB6Ii8+PHBhdGggZmlsbD0iI0JEMDAwMCIgZD0iTTE0IDBoN3YxNGgtN3oiLz48L3N2Zz4="
        case "germany":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIxIDE0Ij48cGF0aCBmaWxsPSIjQkYwMDAwIiBkPSJNMCAwaDIxdjE0SDB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxIDRoLTcuMjIzYTUuODQgNS44NCAwIDAwLTIuNzYxLTIuNzYxVjBoLTV2MS4yMzlBNS44MzQgNS44MzQgMCAwMDMuMjU0IDRIMHY1aDMuMjU0YTUuODQgNS44NCAwIDAwMi43NjEgMi43NjFWMTRoNXYtMi4yMzlBNS44NDUgNS44NDUgMCAwMDEzLjc3NiA5SDIxVjR6Ii8+PHBhdGggZD0iTTIxIDVoLTcuNjk2YTUuMDE2IDUuMDE2IDAgMDAtMy4yODktMy4yODlWMGgtM3YxLjcxMUE1LjAxNiA1LjAxNiAwIDAwMy43MjYgNUgwdjNoMy43MjZhNS4wMTYgNS4wMTYgMCAwMDMuMjg5IDMuMjg5VjE0aDN2LTIuNzExQTUuMDE2IDUuMDE2IDAgMDAxMy4zMDQgOEgyMVY1eiIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgY3g9IjguNTE1IiBjeT0iNi41IiByPSI0LjEyNSIvPjxwYXRoIGQ9Ik0xMC4wNTcgNy4zNjJsLjAxNC4wMDhhNC44MDIgNC44MDIgMCAwMTEuNTU4Ljg4M2wuMDAzLTMuNTA3Yy0uNzIxLjYxMS0xLjYxNSAxLjIxNC0yLjYwMyAxLjM3OS4wNjgtLjQwMS4yMjUtLjc4NS4zNDktMS4xNTV2LS4wMTNsLjAwOC0uMDE0YTQuODAyIDQuODAyIDAgMDEuODgzLTEuNTU4bC0zLjUwOC0uMDAzYy42NDQuNzYgMS4yNzkgMS43MTEgMS40IDIuNzYzLTEuMDUyLS4xMjEtMi4wMDItLjc1Ni0yLjc2My0xLjRMNS40IDguMjUzYy40Ni0uMzg5Ljk4OS0uNjkgMS41NzItLjg4OGwuMDA3LS4wMDRoLjAwNmMuMzctLjEyNC43NTQtLjI4MSAxLjE1NS0uMzQ5LS4xNjQuOTktLjc2OCAxLjg4Mi0xLjM3OSAyLjYwNGwzLjUwOC0uMDAyYTQuODMzIDQuODMzIDAgMDEtLjg4OC0xLjU3MmwtLjAwMy0uMDA3di0uMDA2Yy0uMTA1LS4zMTQtLjIzLS42NC0uMzA5LS45NzcuMzM2LjA3OS42NjIuMjA0Ljk3Ny4zMDloLjAxMXoiLz48L3N2Zz4="
        case "italy":
            return ""
        case "japan":
            return ""
        case "poland":
            return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTAgMGgyMXYxNEgweiIvPjxwYXRoIGZpbGw9IiNBRTBGMEQiIGQ9Ik0wIDdoMjF2N0gweiIvPjwvc3ZnPg=="   
        case "sweden":
            return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDA2NUE0IiBkPSJNMCAwaDIxdjE0SDB6Ii8+PHBhdGggZD0iTTYuNTYzIDUuNkgwdjIuOGg2LjU2M1YxNGgyLjYyNVY4LjRIMjFWNS42SDkuMTg3VjBINi41NjN2NS42eiIgZmlsbD0iI0ZGREUwMCIvPjwvZz48L3N2Zz4="
        case "uk":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMSAxNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0uMDA0IDBoMjF2MTRoLTIxeiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMwMDJDOEEiIGQ9Ik0uMDA0IDBoMjF2MTRoLTIxeiIvPjxnIGNsaXAtcGF0aD0idXJsKCNiKSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTguMjM5IDdMMCAxMy4xNDZ2Ljg3bC41MTEtLjAwMSA4LjU2Ni02LjM5em0tNi40MDUgNy4wMTRsMS41MzQtLjAwMSA3LjEzNi01LjMyNC0uNzY2LS41NzF6TTE5LjIxNi4wMDFsLTEuNTk3LjAwMi03LjExNSA1LjMwOC43OTguNTk1ek0yMS4wMDQgMGgtLjQ2NGwtOC41NzcgNi4zOTkuODA2LjYwMUwyMS4wMDQuODU3em0tOS44MDcgNi45N0wyMC42MjIgMTRoLjM4MnYtLjg1N0wxMi43NjkgN2wtLjgwNi0uNjAxeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMC40NzEgNi41MjZsLjgzMS0uNjItLjc5OC0uNTk1TDMuNDAzLjAxMyAxLjc0Mi4wMTR6bS4xMDUuOTY3bC0uODM4LjYyNS43NjYuNTcxIDcuMTIyIDUuMzE0IDEuNjc1LS4wMDJ6bS0uNzI2LS40NDVMLjQyMi4wMTUgMCAuMDE2di44MzhMOC4yMzkgN2wuODM4LjYyNXptLjU2MS0uNDFsLjE2NS4yMjEuMDYtLjA4LS4xNjUtLjIyMXoiLz48cGF0aCBmaWxsPSIjQzgxMzE4IiBkPSJNMTAuNDcxIDYuNTI2bC4wMTUuMDExLS4wMTUuMDIxLjE2NS4yMjEuMTA5LS4xNDcuNDUyLjMzOC43NjYtLjU3MUwyMC41NCAwbC0xLjMyNC4wMDEtNy45MTQgNS45MDV6Ii8+PHBhdGggZmlsbD0iI0M4MTMxOCIgZD0iTTkuODUgNy4wNDhsLjU1Ny0uNDE2LjAwNC4wMDYuMDYtLjA4LjAxNS0uMDIxLS4wMTUtLjAxMUwxLjc0Mi4wMTQuNDIyLjAxNXptMS4zNDctLjA3OGwtLjQ1Mi0uMzM4LS4xMDkuMTQ3LS4wNi4wOC4zMDQuNDA3LS4zMDQuMjI3IDguNzI1IDYuNTA4TDIwLjYyMiAxNHoiLz48cGF0aCBmaWxsPSIjQzgxMzE4IiBkPSJNMTAuNTc2IDcuNDkzbC4zMDQtLjIyNy0uMzA0LS40MDctLjE2NS0uMjIxLS4wMDQtLjAwNi0uNTU3LjQxNi0uNzczLjU3Ny04LjU2NiA2LjM5IDEuMzIzLS4wMDEgNy45MDQtNS44OTZ6Ii8+PC9nPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZmlsbD0ibm9uZSIgZD0iTS4wMDQgMGgyMXYxNGgtMjF6Ii8+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjRkZGIiBkPSJNMjEuMDA0IDRoLThWMGgtNXY0aC04djVoOHY1aDVWOWg4eiIvPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZmlsbD0iI0M4MTMxOCIgZD0iTTIxIDQuOTM2aC05VjBIOWwuMDA0IDQuOTM2aC05djNoOUw5IDE0aDNsLjAwNC02LjA2NGg5eiIvPjwvc3ZnPg=="
        case "usa":        
            return ""
        case "ussr":        
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIxIDE0Ij48cGF0aCBmaWxsPSIjQUUwRjBEIiBkPSJNMCAwaDIxdjE0SDB6Ii8+PHBhdGggZmlsbD0iI0U1RTUxMiIgZD0iTTkuMjQzIDYuNTExbC0uNzUyLS43MjFhMy4xNDMgMy4xNDMgMCAwMC41NDQtMS45NTNDOC45NDIgMi4yNDMgOC4xOTIgMS42OTYgNi45NjkgMWMuODc4LjkyNCAxLjExNCAxLjQgMS4xMTQgMi44NTMgMCAuNDE5LS4xMy44NDQtLjM2IDEuMTk5bC0yLjA3LTEuOTg2Ljg0Ny0uODQ3LTEuNTI3LS4wOTVMMy41NyAzLjUyMmwuODA1LjgyMi41Ny0uNTcxIDIuMDMyIDEuOTVhMS43MTUgMS43MTUgMCAwMS0xLjA4Mi4xNzZjLTEuMDkxLS4xNzUtMS40NzQtLjQ4OS0xLjczOS0uOTkzbC0uNTI4LjUyOC0uMTUxLS4xNTEtLjE0My4xNDRhLjQyLjQyIDAgMDAtLjM5NC4xMDcuNDE5LjQxOSAwIDAwLS4xMi4yNzljLS4xNTIuMDU1LS43MzQuNDUzLS44MS41MjlhLjUxNS41MTUgMCAwMC43MjkuNzI5Yy4wNzYtLjA3Ni40NzQtLjY1OC41MjktLjgwOWEuNDIuNDIgMCAwMC4yNzktLjEyMWMuMTA3LS4xMDcuMTM4LS4yNTYuMTA3LS4zOTRsLjEyNC0uMTI0Yy41My43IDEuMTM3IDEuMTY5IDIuMjQyIDEuMjkyLjY5OC4wNzcgMS4yOTMtLjA5NCAxLjc2OS0uNDEzbC43NS43MTkuNzA0LS43MXoiLz48L3N2Zz4="
    }
}
function getType(type){
    switch (type) {
        case "AT-SPG":
            return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDgiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBsNC41IDhMOSAwSDB6Ii8+PC9zdmc+"
        case "SPG":  
            return "*" 
        case "lightTank":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkgMTEiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00LjUgMEwwIDUuNSA0LjUgMTEgOSA1LjUgNC41IDB6Ii8+PC9zdmc+"
        case "mediumTank":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkgMTEiPjxwYXRoIGQ9Ik00LjcwMiAzLjY1NmwtLjAwNC0uMDE0LjAxMS4wMTQgMS4zOTEtMS43TDQuNSAwIDAgNS41bDEuNTk3IDEuOTUyem0yLjcwNS0uMTAzTDQuMjk0IDcuMzU4bC0uMDA0LS4wMDQtMS4zODYgMS42OTVMNC41IDExIDkgNS41eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="
        case "heavyTank":
            return "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkgMTEiPjxwYXRoIGQ9Ik0yLjYwMiA4LjY4bDQuNTYzLTUuNDIzLS43NjQtLjkzNC00LjU2MyA1LjQyM3ptMi45MTMtNy40MzlMNC41IDAgMCA1LjVsLjk1MiAxLjE2M3pNMy40ODcgOS43NjJMNC41IDExIDkgNS41bC0uOTQ5LTEuMTZ6IiBmaWxsPSIjRkZGIi8+PC9zdmc+"
    }
}
function getTier(tier){
    switch (tier) {
        case 1:
            return "I"
        case 2:  
            return "II" 
        case 3:
            return "III"
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        case 7:
            return "VII"   
        case 8:
            return "VIII"
        case 9:
            return "IX"
        case 10:        
            return "X"
    }
}

function getPrice(value){
    if(localStorage.currency){
        const currency = JSON.parse(localStorage.currency)
        return {
            newValue:(+value * currency.course).toFixed(1),
            newName: currency.name
        }
    }
    else {
        return{
            newValue:value,
            newName:"USD"
        } 
    }
}

export {getFlag, getType, getTier, getPrice}