from tkinter import *


class MainWindowGUI:
    def __init__(self, screen_obj):
        self.screen_obj = screen_obj
        screen_obj.resizable(width=False, height=False)
        screen_obj.title("Cat Or Dog Classifier")

        self.description = Label(screen_obj, text="Please upload a valid picture")
        self.upload_button = Button(screen_obj, text="Upload Picture", command=self.upload)
        self.submit_button = Button(screen_obj,text="Submit", command=self.submit)
        self.close_button = Button(screen_obj, text="Close", command=screen_obj.quit)

        self.description.grid(row=1, column=2)
        self.upload_button.grid(row=2, column=2)
        self.submit_button.grid(row=3, column=2)
        self.close_button.grid(row=4, column=2, sticky=NE)

    def upload(self):
        print("Upload")

    def submit(self):
        print("Submit")

    def run(self):
        self.screen_obj.mainloop()


main_window = Tk()
main_window_GUI = MainWindowGUI(main_window)
main_window_GUI.run()
