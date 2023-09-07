import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html"
})
export class HomeComponent{
    ToDo = [
        {
            "name":"task 1",
            "content":"đây là việc cần làm 1"
        },
        {
            "name":"task 2",
            "content":"đây là việc cần làm 2"
        },
        {
            "name":"task 3",
            "content":"đây là việc cần làm 3"
        },
        {
            "name":"task 4",
            "content":"đây là việc cần làm 4"
        }
    ]
    InProgress = [
        {
            "name":"task 5",
            "content":"việc đang làm 1"
        },
        {
            "name":"task 6",
            "content":"việc đang làm 2"
        },
        {
            "name":"task 7",
            "content":"việc đang làm 3"
        },
        {
            "name":"task 8",
            "content":"việc đang làm  4"
        }
    ]
    InReview = [
        {
            "name":"task 5",
            "content":"đang xem xét 1"
        },
        {
            "name":"task 6",
            "content":"đang xem xét 2"
        },
        {
            "name":"task 7",
            "content":"đang xem xét3"
        },
        {
            "name":"task 8",
            "content":"đang xem xét 4"
        }
    ]
    Done = [
        {
            "name":"task 5",
            "content":"hoàn thành 1"
        },
        {
            "name":"task 6",
            "content":"hoàn thành 2"
        },
        {
            "name":"task 7",
            "content":"hoàn thành 3"
        },
        {
            "name":"task 8",
            "content":"hoàn thành 4"
        }
    ]

}