<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>

    <style>
        .list-group {
            overflow-y: scroll;
            height: 200px;
        }

        .list-group::-webkit-scrollbar-track {
            padding: 2px 0;
            background-color: #e7e7e7;
        }

        .list-group::-webkit-scrollbar {
            width: 5px;
        }

        .list-group::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #3490dc;
        }

    </style>
</head>

<body>

    <div class="container">
        <div class="row mt-5" id="app">
            <div class="offset-4 col-4 offset-sm-1 col-sm-10">
                <il class="list-group-item active">Chat Room <span class="badge badge-danger">@{{numberOfUsers}}</span></il>
                <div class="badge badge-pill badge-primary">@{{ typing }}</div>
                <ol class="list-group" v-chat-scroll>
                    <message v-for="(value, i) in chat.message" :key="i" :color='chat.color[i]' :user='chat.user[i]'
                        :time='chat.time[i]'>
                        @{{ value }}</message>

                </ol>
                <input type="text" class="form-control" placeholder="Type your message here..." v-model="message" @keyup.enter="send">
            </div>

        </div>
    </div>


    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
