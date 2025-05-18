#Exercise 1 : Call History

class Phone:
    '''Represent phone with number and calls history'''
    def __init__(self, phone_number):
        ''''''
        self.number = phone_number
        self.call_history = []
        self.messages = []
        
    def call(self, other_phone):
        self.call_history.append(f"{self.number} calls to {other_phone.number}")
    
    def show_call_history(self):
        print(f"------------Call History for {self.number}------------")
        print(*self.call_history, sep="\n")
        
    def send_message(self, other_phone, message):
        msg = {
            "to": other_phone.number,
            "from": self.number,
            "content": message
        }
        self.messages.append(msg)
        other_phone.messages.append(msg)   
        
    def show_outgoing_messages(self):
        print(f"------------Outgoing messages for {self.number}------------")
        for msg in self.messages:
            if msg["from"] == self.number:
                print(f"To {msg['to']}: {msg['content']}")
        
    def show_incoming_messages(self):
        print(f"------------Incoming messages for {self.number}------------")
        for msg in self.messages:
            if msg["to"] == self.number:
                print(f"From {msg['from']}: {msg['content']}")
        
    def show_messages_from(self,number):
        print(f"------------Messages from {number} to {self.number}------------")
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.number:
                print(f"{msg['content']}")
                
p1 = Phone("111")
p2 = Phone("222")

p1.call(p2)
p1.send_message(p2, "Hello!")
p2.send_message(p1, "Hi back!")
p1.send_message(p2, "How are you?")

p1.show_call_history()
p1.show_outgoing_messages()
p1.show_incoming_messages()
p1.show_messages_from("222")
