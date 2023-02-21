import unittest
from bs4 import BeautifulSoup


class TestHTML(unittest.TestCase):
    # test for whether some certain text is included in html
    def test_html_text(self):
        response = open("src/index.html", encoding="utf8")
        soup = BeautifulSoup(response, 'html.parser')
        self.assertIn("Home", soup.get_text())
        self.assertIn("Contact", soup.get_text())
        self.assertIn("About", soup.get_text())
        self.assertIn("MScAC", soup.get_text())
        self.assertIn("Search", soup.get_text())
        self.assertIn("Internship Year", soup.get_text())
        self.assertIn("Project Organization", soup.get_text())
        self.assertIn("Academic Supervisor", soup.get_text())
        response.close()

    # test for whether some certain tag is other's children
    def test_html_parent(self):
        response = open("src/index.html", encoding="utf8")
        soup = BeautifulSoup(response, 'html.parser')
        div_list = soup.find_all('div')
        list1 = []
        for div in div_list:
            lst1= []
            for parent in div.parents:
                if parent is None:
                    lst1.append(parent)
                else:
                    lst1.append(parent.name)
            list1.append(lst1)
        for item in list1:
            self.assertIn("body", item)
        response.close()


if __name__ == '__main__':
    unittest.main()
