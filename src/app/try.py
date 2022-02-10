from selenium import webdriver
import time


def proceed():
    global driver
    driver = webdriver.Chrome("D:\chromedriver")
    driver.maximize_window()
    driver.get("http://localhost:4200")
    driver.find_element_by_xpath('/html/body/app-root/app-login/div/div/div/div/form/form/div[1]/input').send_keys('nisha.kumari@intimetec.com')
    driver.find_element_by_xpath('/html/body/app-root/app-login/div/div/div/div/form/form/div[2]/input').send_keys('123456')
    driver.find_element_by_xpath('/html/body/app-root/app-login/div/div/div/div/form/form/button').click()





def search():
    driver.find_element_by_xpath(
        "/html/body/app-root/app-user/div/div/div/div/div/form/div[1]/div[1]/select"
    ).find_elements_by_tag_name("option")[0].click()
    driver.find_element_by_xpath(
        "/html/body/app-root/app-user/div/div/div/div/div/form/div[1]/div[2]/select"
    ).find_elements_by_tag_name("option")[0].click()
    driver.find_element_by_xpath(
        "/html/body/app-root/app-user/div/div/div/div/div/form/div[2]/div/input"
    ).send_keys("22-02-2022")
    driver.find_element_by_xpath('/html/body/app-root/app-user/div/div/div/div/div/form/div[3]/button').click()

def selectBus():
  driver.find_element_by_xpath('/html/body/app-root/app-available-buses/div/div/div[3]/table/tbody/tr/td[6]/button').click()
def selectSeat():
  driver.find_element_by_xpath('/html/body/app-root/app-select-seat/div/div[1]/div[1]/img').click()
  driver.find_element_by_xpath('/html/body/app-root/app-select-seat/div/div[2]/div[2]/button').click()
def passengerInformation():
  driver.find_element_by_xpath('/html/body/app-root/app-passenger/div/div/div[2]/div/div/form/div[1]/div/input').send_keys('Nisha')
  driver.find_element_by_xpath('/html/body/app-root/app-passenger/div/div/div[2]/div/div/form/div[2]/div/input').send_keys('1111111111')
  driver.find_element_by_xpath('/html/body/app-root/app-passenger/div/div/div[2]/div/div/form/div[3]/div/input').send_keys('Nisha@gmail.com')
  driver.find_element_by_xpath('/html/body/app-root/app-passenger/div/div/div[2]/div/div/form/div[4]/button').click()
proceed()
time.sleep(2)
search()
time.sleep(2)
selectBus()
time.sleep(2)
selectSeat()
time.sleep(2)
passengerInformation()

