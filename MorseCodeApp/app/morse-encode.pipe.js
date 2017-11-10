"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var morseCode = {
    "a": "._", "b": "_...", "c": "_._.", "d": "_..",
    "e": ".", "f": ".._.", "g": "__.", "h": "....",
    "i": "..", "j": ".___", "k": "_._", "l": "._..",
    "m": "__", "n": "_.", "o": "___", "p": ".__.",
    "q": "__._", "r": "._.", "s": "...", "t": "_",
    "u": ".._", "v": "..._", "w": ".__", "x": "_.._",
    "y": "_.__", "z": "__..", " ": " ",
    "1": ".____", "2": "..___", "3": "...__", "4": "...._", "5": ".....",
    "6": "_....", "7": "__...", "8": "___..", "9": "____.", "0": "_____"
};
function translate(msg) {
    return msg.split("").reduce(function (prev, char) {
        return prev + morseCode[char.toLocaleLowerCase()] + " ";
    }, "");
}
var MorsePipe = (function () {
    function MorsePipe() {
    }
    MorsePipe.prototype.transform = function (value) {
        return translate(value);
    };
    MorsePipe = __decorate([
        core_1.Pipe({ name: 'morse' })
    ], MorsePipe);
    return MorsePipe;
}());
exports.MorsePipe = MorsePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yc2UtZW5jb2RlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3JzZS1lbmNvZGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUdwRCxJQUFNLFNBQVMsR0FBRztJQUNkLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLO0lBQy9DLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNO0lBQzlDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNO0lBQy9DLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNO0lBQzdDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzdDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNO0lBQ2hELEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRztJQUVsQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPO0lBQ3BFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU87Q0FDdkUsQ0FBQTtBQUVELG1CQUFtQixHQUFXO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFFLEdBQUcsR0FBRyxDQUFDO0lBQzlELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNYLENBQUM7QUFJRDtJQUFBO0lBSUEsQ0FBQztJQUhHLDZCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUhRLFNBQVM7UUFEckIsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO09BQ1gsU0FBUyxDQUlyQjtJQUFELGdCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgbW9yc2VDb2RlID0ge1xuICAgIFwiYVwiOiBcIi5fXCIsIFwiYlwiOiBcIl8uLi5cIiwgXCJjXCI6IFwiXy5fLlwiLCBcImRcIjogXCJfLi5cIixcbiAgICBcImVcIjogXCIuXCIsIFwiZlwiOiBcIi4uXy5cIiwgXCJnXCI6IFwiX18uXCIsIFwiaFwiOiBcIi4uLi5cIixcbiAgICBcImlcIjogXCIuLlwiLCBcImpcIjogXCIuX19fXCIsIFwia1wiOiBcIl8uX1wiLCBcImxcIjogXCIuXy4uXCIsXG4gICAgXCJtXCI6IFwiX19cIiwgXCJuXCI6IFwiXy5cIiwgXCJvXCI6IFwiX19fXCIsIFwicFwiOiBcIi5fXy5cIixcbiAgICBcInFcIjogXCJfXy5fXCIsIFwiclwiOiBcIi5fLlwiLCBcInNcIjogXCIuLi5cIiwgXCJ0XCI6IFwiX1wiLFxuICAgIFwidVwiOiBcIi4uX1wiLCBcInZcIjogXCIuLi5fXCIsIFwid1wiOiBcIi5fX1wiLCBcInhcIjogXCJfLi5fXCIsXG4gICAgXCJ5XCI6IFwiXy5fX1wiLCBcInpcIjogXCJfXy4uXCIsIFwiIFwiOiBcIiBcIixcblxuICAgIFwiMVwiOiBcIi5fX19fXCIsIFwiMlwiOiBcIi4uX19fXCIsIFwiM1wiOiBcIi4uLl9fXCIsIFwiNFwiOiBcIi4uLi5fXCIsIFwiNVwiOiBcIi4uLi4uXCIsXG4gICAgXCI2XCI6IFwiXy4uLi5cIiwgXCI3XCI6IFwiX18uLi5cIiwgXCI4XCI6IFwiX19fLi5cIiwgXCI5XCI6IFwiX19fXy5cIiwgXCIwXCI6IFwiX19fX19cIlxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobXNnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtc2cuc3BsaXQoXCJcIikucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjaGFyKSB7XG4gICAgICAgIHJldHVybiBwcmV2ICsgbW9yc2VDb2RlWyBjaGFyLnRvTG9jYWxlTG93ZXJDYXNlKCkgXSArIFwiIFwiO1xuICAgIH0sIFwiXCIpO1xufVxuXG5cbkBQaXBlKHsgbmFtZTogJ21vcnNlJyB9KVxuZXhwb3J0IGNsYXNzIE1vcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSh2YWx1ZSk7XG4gICAgfVxufVxuXG4iXX0=